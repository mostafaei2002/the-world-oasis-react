import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qkarfrffxwtfronrxzwn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrYXJmcmZmeHd0ZnJvbnJ4enduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMjk1NzUsImV4cCI6MjAyMzkwNTU3NX0.G4pR_KBC2P3iiYO93C7u3EmKL0qk70y0poVu54sEpCw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
