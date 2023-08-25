import React from "react"
import {Flex,HStack,Spacer,Heading,Link} from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"



function Navbar(){
    return <>
    <Flex 
    align="center"
    // backgroundColor="yellow"
    // color="pink"
     justifyContent="space-evenly"
    >
        {/* <Image width={50}src={logo} /> */}
    <Heading>Garden-grooves</Heading>
    {/* <Spacer/> */}
    <HStack>
        <Link as="a" href="/" >HOME</Link>
        <Link as="a" href="/contact">Contact</Link>
        <Link as="a" href="/login">Login</Link>
        <Link as="a" href="/about">About</Link>
    </HStack>
    </Flex>
    
    </>
}
export default Navbar