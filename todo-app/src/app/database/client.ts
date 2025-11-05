import {createClient} from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("As variáveis de ambiente do Supabase devem ser definidas");
}

// Cria e exporta o cliente Supabase para ser usado nos Route Handlers
export const supabase = createClient(supabaseUrl, supabaseKey);