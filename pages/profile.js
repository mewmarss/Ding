import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import Link from "next/link";
import PostCard from "../components/PostCard";
import { useRouter } from "next/router";
import FriendInfo from "../components/FriendInfo";

export default function ProfilePage() {
    const router = useRouter();
    const {asPath:pathname} = router;
    const isPosts = pathname.includes('posts') || pathname==='/profile';
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos = pathname.includes('photos');
    const tabClasses = 'flex gap-1 px-4 py-1  items-center border-b-4 border-b-white';
    const activeTabClasses = 'flex gap-1 px-4 py-1  items-center border-dingPurple border-b-4 text-dingPurple font-bold';

    return (
        <Layout>
            <Card noPadding={true}>
                <div className="relative overflow-hidden rounded-md">
                <div className="h-36 overflow-hidden flex justify-center items-center"> 
                    <img src="https://images.unsplash.com/photo-1531219435494-8e90d22adc1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt=""/>
                </div>
                <div className="absolute top-24 left-4">
                    <Avatar size={'lg'}/>
                </div>
                <div className="p-4 pt-2 md:pt-4 pb-0">
                    <div className="ml-24 md:ml-40">
                    <h1 className="text-3xl font-bold">
                        Saud Khan
                    </h1>
                    <div className="text-gray-500 leading-4">Mumbai, India</div>
                    </div>
                    <div className="mt-4 md:mt-10 flex gap-1">
                        <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        <span className="hidden sm:block">Posts</span>
                        </Link>
                        <Link href={'/profile/about'} className={isAbout ? activeTabClasses : tabClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className="hidden sm:block">About</span>
                        </Link>
                        <Link href={'/profile/friends'} className={isFriends ? activeTabClasses : tabClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <span className="hidden sm:block">Friends</span>
                        </Link>
                        <Link href={'/profile/photos'} className={isPhotos ? activeTabClasses : tabClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="hidden sm:block">Photos</span>
                        </Link>
                    </div>
                </div>
                </div>
            </Card>
            {isPosts && (
                <div>
                    <PostCard/>
                </div>
            )}
            {isAbout && (
                <div>
                    <Card>
                        <h2 className="text-3xl mb-2">About me</h2>
                        <p className="text-sm">Trying to finish this Project As soon as possible, hope it finishes well</p>
                    </Card>
                </div>
            )}
            {isFriends && (
                <div>
                    <Card>
                    <h2 className="text-3xl mb-2">Friends</h2>
                    <div className="">
                        <div className="border-b border-b-gray-100 p-4 -mx-4">
                         <FriendInfo />
                        </div>
                        <div className="border-b border-b-gray-100 p-4 -mx-4">
                         <FriendInfo />
                        </div>
                        <div className="border-b border-b-gray-100 p-4 -mx-4">
                         <FriendInfo />
                        </div>
                        <div className="border-b border-b-gray-100 p-4 -mx-4">
                         <FriendInfo />
                        </div>
                        <div className="border-b border-b-gray-100 p-4 -mx-4">
                         <FriendInfo />
                        </div>
                    </div>
                    </Card>
                </div>
            )}
            {isPhotos && (
                <div>
                    <Card>
                        <div className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-md overflow-hidden h-48 shadow-md flex items-center">
                            <img src="https://images.unsplash.com/photo-1559006864-e354747f9c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFuJTIwY291bnRyeXNpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="rounded-md overflow-hidden h-48 shadow-md flex items-center">
                            <img src="https://images.unsplash.com/photo-1560089168-fead75462d2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuJTIwY291bnRyeXNpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="rounded-md overflow-hidden h-48 shadow-md flex items-center">
                            <img src="https://images.unsplash.com/photo-1633383993448-e01d7b1e474d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGF1dHVtbiUyMHBhcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className="rounded-md overflow-hidden h-48 shadow-md flex items-center">
                            <img src="https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNoZXJyeSUyMGJsb3Nzb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        </div>
                    </Card>
                </div>
            )}
        </Layout>
    );
}