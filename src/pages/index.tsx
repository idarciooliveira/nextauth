import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext';

interface User{
    username: string
    password: string
}

export default function Home() {

  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)


  const handleSignIn = async ({ username, password }: User) =>{
   await signIn({
       username, password
   })
  }

 

  return (
    <div className="main_login">
        <div className="login">
            <div className="box">
                <div className="h_logo">
                    <h2>Ango</h2>
                    <h3>Torrent</h3>
                </div>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <section>
                        <div className="text_input">
                            <input {...register('username')} type="text" name='username' placeholder="Username"/>
                        </div>
                        <div className="text_input">
                            <input {...register('password')} type="password" name='password' placeholder="Password"/>
                        </div>
                        <button className="btn_in">
                            <p>Entrar</p>
                        </button>
                    </section>
                </form>
            </div>
        </div>
    </div>
  )
}
