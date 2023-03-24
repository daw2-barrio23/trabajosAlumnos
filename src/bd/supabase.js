import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://lpboeckdzbhlbmqjcicl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYm9lY2tkemJobGJtcWpjaWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MzUsImV4cCI6MTk5Mjc1MjYzNX0.BNSzNlm_Ajj6KJ9TEO0X0V4TL_txfgZj0swkuY1d-v0'


//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)