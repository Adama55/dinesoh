import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}


export async function POST(req) {
    try {
      const { name, price } = await req.json();
  
      const { data, error } = await supabase
        .from("products")
        .insert([{ name, price }]);
  
      if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
  
      return new Response(JSON.stringify(data), { status: 201 });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
  }
  