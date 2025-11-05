declare namespace NodeJS {
    interface ProcessEnv {
        //variavel que pode ser vistas no client side
        NEXT_PUBLIC_SUPABASE_URL: string;

        // variavel que so pode ser vista no server side
        SUPABASE_SERVICE_ROLE_KEY: string;
    }
}