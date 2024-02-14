import React, { createContext, useState, useContext, useEffect } from "react"

const MemberContext = createContext()
export const useMember = () => useContext(MemberContext)

const MemberProvider = ({ children }) => {

    const [member, setMember] = useState(null)

    useEffect(() => {
        if(member)  return
        setMember(JSON.parse(localStorage.getItem('member')))
    }, [])

    useEffect(() => {
        if(!member){
            localStorage.removeItem('member')
        } else {
          localStorage.setItem('member', JSON.stringify(member))
        }
    }, [member])


    return (
        <MemberContext.Provider value={{ member, setMember }}>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberProvider