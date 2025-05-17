import { supabase } from "@/lib/supabase";
import { Product } from "@/lib/model";

// ➤ Récupérer tous les produits (GET /api/products)
export async function GET() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}

// ➤ Ajouter un produit (POST /api/products)
export async function POST(req) {
    try {
        const body = await req.json();
        const { name, description, price, stock, imgUrl } = body;

        const product = new Product(name, description, price, stock, imgUrl);
        product.validate(); // Vérification des données

        const { data, error } = await supabase
            .from("products")
            .insert([{ name, description, price, stock, imgUrl }])
            .select("*");

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }

        return new Response(JSON.stringify({ message: "Produit créé avec succès" }), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 400 });
    }
}
