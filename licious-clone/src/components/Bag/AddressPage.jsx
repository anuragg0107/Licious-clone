
import {Box,Input,Button,Stack,Image,Text} from "@chakra-ui/react"

const Address=()=>
{
    return (
        <>
        <Box display={"flex"}  >
            <Box  width={"30%"} margin={"auto"} marginLeft={"80px"}>
                <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/876e0156-29b3-c1f8-6887-abf75c5e04fb/original/Masala_180x180_App.png?format=webp" w={"60%"}></Image>
            </Box>
            <Box width={"40%"}>
        <Text style={{textAlign:"center", color:"grey", fontSize:"20px"}}>Add New Address</Text>
        <Stack spacing={5} w="85%" marginTop={"10px"}  >
       <Input variant='flushed' placeholder='Enter Location' size='md'  />
       <Input variant='flushed' placeholder='Flat No./Building' size='md' />
       <Input variant='flushed' placeholder='Land Mark (Optional)' size='md' />
       <Input variant='flushed' placeholder='City' size='md' />
       <Input variant='flushed' placeholder='Mobile Number' size='md' />
       <Input variant='flushed' placeholder='Enter Email' size='md' />
       <Input variant='flushed' placeholder='Enter Full Name' size='md' />
       <Button  size='md' bg='grey'>Save & Proceed</Button>
        </Stack>
        </Box>
        <Box margin={"auto"} width={"30%"}>
            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4f3d8a54-b260-79ec-a110-6bc31a6b987d/original/PBM_6_(7).png?format=webp " w={"60%"}></Image>
        </Box>
        </Box>
        </>
    )
}
export default  Address  
// const goToAddressPage = () => {
//     onClose();
//     navigate("/address");
//   }