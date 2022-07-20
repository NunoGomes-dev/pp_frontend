import { FiUpload } from "react-icons/fi";
import useUploadMedia from "../../../hooks/mutations/useUploadMedia";
import { Box, Card, HStack, Image, VStack } from "../../Design";
import { Spinner } from "../Loadings";
import { AiFillDelete } from "react-icons/ai";

const InputFile = ({ value = null, callback, containerProps = {} }) => {
  const { mutate, isLoading } = useUploadMedia(callback);

  const handleFile = (event) => {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    mutate(data);
    event.target.value = "";
  };

  return (
    <>
      <input
        type="file"
        id="file"
        onChange={handleFile}
        style={{ display: "none" }}
      />
      <Card
        borderStyle="dashed"
        borderWidth="2px"
        padding="0"
        height="full"
        width="full"
        position="relative"
        {...containerProps}
      >
        {!value && (
          <label htmlFor="file">
            <VStack
              height="full"
              width="full"
              justify="center"
              align="center"
              fontSize="lg"
              cursor="pointer"
              htmlFor="file"
              opacity={isLoading ? 0.3 : 1}
              zIndex="5"
            >
              <HStack fontWeight="500" color="terciary">
                <span>Adicionar imagem</span>
                <FiUpload />
              </HStack>
              <Box fontWeight="300" fontSize="sm" color="secondary">
                ou arraste a imagem para carregar
              </Box>
            </VStack>
          </label>
        )}
        {!value && isLoading && (
          <Spinner
            size="48px"
            position="absolute"
            top="50%"
            left="50%"
            zIndex="10"
            transform="translateY(-24px) translateX(-24px)"
          />
        )}
        {value && !isLoading && (
          <Box {...containerProps}>
            <Image
              src={value}
              alt="image_part"
              width="full"
              height="full"
              objectFit="contain"
            />
            <Box
              position="absolute"
              top="1rem"
              right="1rem"
              onClick={() => callback(null)}
              cursor="pointer"
            >
              <AiFillDelete fontSize="32px" />
            </Box>
          </Box>
        )}
      </Card>
    </>
  );
};
export default InputFile;
