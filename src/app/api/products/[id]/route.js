import { supabase } from "@/lib/supabase";
import { Product } from "@/lib/model";


export async function GET(req, { params }) {
    const { id } = params;
    try {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", id)
            .single();  // Assure-toi de récupérer un seul produit.

        if (error || !data) {
            return new Response(JSON.stringify({ error: "Produit non trouvé" }), { status: 404 });
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function PUT(req, { params }) {
    const { id } = params;

    try {
        const body = await req.json();
        const { name, description, price, stock,imgUrl } = body;

        const product = new Product(name, description, price, stock, imgUrl);
        product.validate(); // Vérification des données

        const { data, error } = await supabase
            .from("products")
            .update({ name, description, price, stock, imgUrl })
            .eq("id", id)
            .select("*");

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(
            JSON.stringify({ message: "Produit mis à jour avec succès", product: data[0] }),
            { status: 200 }
        );
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        const { error } = await supabase.from("products").delete().eq("id", id);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(
            JSON.stringify({ message: "Produit supprimé avec succès" }),
            { status: 200 }
        );
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

