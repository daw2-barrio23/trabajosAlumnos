// cargamos libreria de supabase
import { createClient } from '@supabase/supabase-js'

export const pruebas = {
  templeate: '<h1>pruebas</h1>',
  script: async () => {
    console.log('vista pruebas cargada')

    // conecxion con supabase
    const supabaseUrl = 'https://lpboeckdzbhlbmqjcicl.supabase.co'

    // const supabaseKey = process.env.SUPABASE_KEY
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYm9lY2tkemJobGJtcWpjaWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MzUsImV4cCI6MTk5Mjc1MjYzNX0.BNSzNlm_Ajj6KJ9TEO0X0V4TL_txfgZj0swkuY1d-v0'

    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log('conexion a supabase: ', supabase)

    const leerTodosPerfiles = async () => {
      // READ ALL ROWS
      const { data: perfiles, error } = await supabase
        .from('perfiles')
        .select('*')
      console.log(perfiles)
    }

    const agregarPerfil = async () => {
      // INSERT A ROW
      const { data, error } = await supabase
        .from('perfiles')
        .insert([
          {
            nombre: 'ejemplo'
          }
        ])
    }
    // proyectosDetale a partir de funcion
    const leerProyectosDetalle = async () => {
      // INVOKE FUNCTION
      const { data, error } = await supabase
        .rpc('proyectodetalle')

      if (error) console.error(error)
      else console.log('proyectos con detalle: ', data)
    }

    const registro = async () => {
      // USER SIGNUP
      const { data, error } = await supabase.auth.signUp({
        email: 'nicolas.bamu03@gmail.com',
        password: '132456'
      })
    }

    const login = async () => {
      // USER LOGIN
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'nicolas.bamu03@gmail.com',
        password: '132456'
      })
    }

    const verUsuarioLogeado = async () => {
      // GET USER
      const { data: { user } } = await supabase.auth.getUser()
      return user
    }

    const logout = async () => {
      // USER LOGOUT
      const { error } = await supabase.auth.signOut()
    }
    // 1 miramos usuario logeado
    console.log('detalle del usuario logeado: ', await verUsuarioLogeado())

    // 2 me logeo
    await login()

    // 3 miramos usuario logeado
    console.log('detalle del usuario logeado: ', await verUsuarioLogeado())

    // await leerTodosPerfiles()
    // await agregarPerfil()
    await leerTodosPerfiles()
    leerProyectosDetalle()
  }

}
