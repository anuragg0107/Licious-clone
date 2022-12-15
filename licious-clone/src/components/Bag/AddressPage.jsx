
import {Box,Input} from "@chakra-ui/react"

const Address=()=>
{
    return (
        <>
        <Box>
        <Stack spacing={3}>
       <Input placeholder='Enter Location' size='lg' />
       <Input placeholder='Flat No./Building' size='lg' />
       <Input placeholder='Land Mark (Optional)' size='lg' />
       <Input placeholder='City' size='lg' />
       <Input placeholder='Mobile Number' size='lg' />
       <Input placeholder='Enter Email' size='lg' />
       <Input placeholder='Enter Full Name' size='lg' />
       <Button size='lg'>Save & Proceed</Button>
        </Stack>
        </Box>
        </>
    )
}
export default  Address