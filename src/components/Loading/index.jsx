import { useGSAP } from "@gsap/react"
import { appleImg } from "../../utils"
import * as C from "./style"
import gsap from "gsap"

const index = () => {

    useGSAP(() => {
        gsap.to('#img-anim' , {
            opacity: 1,
            duration: .5,
            delay: 1
        })

        gsap.to('#box-animate', {
            opacity: 0,
            zIndex: 0,
            duration: 1,
            delay: 3
        })


    },[])

  return (
    <C.BoxLoading id="box-animate">      
            <img src={appleImg} alt="apple-img" id="img-anim"/>
    </C.BoxLoading>
  )
}

export default index
