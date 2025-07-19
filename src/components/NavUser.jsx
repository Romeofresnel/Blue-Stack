import { Bell, ChevronDown, EllipsisVertical, Search } from 'lucide-react'
import React from 'react'

export default function NavUser() {
    return (
        <>
            <div className="container-navUser">
                <div className="responsive">
                    <h3>Book Hearth</h3>
                    <EllipsisVertical size={27} />
                </div>
                <nav>
                    <div className="container-entete">
                        <Search className="icon-2" size={20} />
                        <Bell className="icon-3" size={20} />
                        <div className="container-profil">
                            <div className="pic-profil">
                                <img src="/px-3.jpg" alt="profil" />
                            </div>
                            <span>jean claude bernard arol bertauld cachemir</span>
                            <ChevronDown className="icon-1" size={25} />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
