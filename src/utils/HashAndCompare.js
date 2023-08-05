import bcrypt from "bcryptjs"

export const hash = ({plaintext , saltRound = 4 } = {} )=>{
    const hash = bcrypt.hashSync(plaintext , parseInt(saltRound))
    return hash
}

export const compare = ({plaintext , hashValue } = {} )=>{
    const match = bcrypt.compareSync(plaintext , hashValue)
    return match
}
