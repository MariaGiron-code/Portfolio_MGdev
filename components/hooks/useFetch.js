'use client'
import { useState, useEffect } from 'react'

export function useFetch(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError]  = useState(null)

    useEffect(() => {
        if(!url) return
        const controller = new AbortController()
        setLoading(true)
        setError(null)

        fetch(url, { signal: controller.signal })
        .then(res => res.json())
        .then(json => {
            if (!json.success) throw new Error(json.error || 'Error desconocido')
            setData(json.data)
        })

        .catch(err => {
            if(err.name !== 'AbortError') setError(err.message)
        })
        .finally(() => setLoading(false))
     
    return () => controller.abort() 
   }, [url])

    return {data, loading, error }
}