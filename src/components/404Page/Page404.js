import React from 'react'
import NomatchWrapper from './NomatchWrapper'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <NomatchWrapper>
            <div>
                <h1 className='display-1'>404</h1>
                <h2 >Not Found</h2>
            </div>
            <Link className='btn btn-primary' to='/'>Home</Link>
        </NomatchWrapper>
    )
}