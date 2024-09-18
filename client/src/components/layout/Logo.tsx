'use client';

import Image from "next/image";
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={()=> router.push('/')}
            alt="logo"
            className="cursor-pointer"
            height="50"
            width="50"
            src={"https://static.vecteezy.com/system/resources/previews/020/088/173/original/initial-e-nest-logo-vector.jpg"}
        />
    );
}

export default Logo;