import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://tthzuvxbitodqtlsoxel.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aHp1dnhiaXRvZHF0bHNveGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MjkwNjUsImV4cCI6MjA2MzAwNTA2NX0.YdanEkm-YMfpivR5-Z479CYx15sAUL-jJhGNr3f-qS0" 
);