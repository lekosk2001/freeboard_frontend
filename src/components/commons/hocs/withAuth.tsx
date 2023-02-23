import { accessTokenState } from "@/src/commons/store";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";

export const withAuth = () => {
    const router = useRouter();
    const [auth, setAuth] = useState(false)
    const [accessToken] = useRecoilState(accessTokenState)

    useEffect(() => {

        if (localStorage.getItem("accessToken") ?? accessToken) { setAuth(true) }

        else {
            alert('로그인 후 이용 가능합니다.')
            setAuth(false)
            void router.push('/login')
        }

    }, [])

    return auth
}