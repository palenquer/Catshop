import React from 'react'
import errorImg from '../assets/img/error404.png'

export default function Page404() {
    return (
        <main className="h-screen w-screen flex justify-center items-center flex-col font-mont">
            <img className="w-40 h-40 mb-8" src={errorImg} alt="error 404"/>
            <p className="text-lg">Ops, essa página não existe!</p>
        </main>
    )
}
