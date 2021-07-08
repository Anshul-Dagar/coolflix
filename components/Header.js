import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='Home' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <h2 className=" text-center text-4xl font-mono sm:mr-10 cursor-pointer hover:text-white active:text-red-400">Coolflix</h2>
           
           {/* <Image
           className="object-contain"
           src="https://links.papareact.com/ua6" width={200} height={100} />  */}
        </header>
    )
}

export default Header
