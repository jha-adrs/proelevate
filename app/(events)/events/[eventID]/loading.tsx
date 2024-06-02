import { Loader } from "lucide-react"

interface loadingProps {

}

const LoaderPage = ()=> {
    <div className='z-100 bg-black/10 flex items-center justify-center'><Loader className='w-6 h-6 animate-spin' /></div>
}

export default LoaderPage;