import Header from 'components/header'
import { useState } from 'react'

export default function Index() {
    const [show, setshow] = useState(true)
    return (
        <>
            <Header />
        </>
    )
}
