import { FiUpload } from "react-icons/fi";
import useUploadMedia from "../../../hooks/mutations/useUploadMedia";
import { Box, Card, HStack, Image, VStack } from "../../Design";
import { Spinner } from "../Loadings";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import useToast from "../../../hooks/notifications/useToast";
import { memo } from "react";

const InputFile = ({ value = null, callback, containerProps = {} }) => {
  const toast = useToast();
  const [onDragHover, setOnDragHover] = useState(false);
  const { mutate, isLoading } = useUploadMedia(callback);

  const handleFile = (e) => {
    const file = e?.target?.files[0];
    if (!file)
      return toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Ficheiro não encontrado!",
      });
    const data = new FormData();
    data.append("file", file);
    mutate(data);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e?.dataTransfer?.files[0];
    if (!file)
      return toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Ficheiro não encontrado!",
      });
    const data = new FormData();
    data.append("file", file);
    setOnDragHover(false);
    mutate(data);
    e.target.value = "";
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
        borderStyle={onDragHover ? "dashed" : "solid"}
        borderWidth="2px"
        padding="0"
        height="full"
        width="full"
        position="relative"
        transition="all 0.3s ease"
        {...containerProps}
      >
        {!value && (
          <label
            htmlFor="file"
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={() => setOnDragHover(true)}
            onDragLeave={() => setOnDragHover(false)}
            onDrop={handleDrop}
          >
            <Box
              height="full"
              fontSize="lg"
              cursor="pointer"
              htmlFor="file"
              opacity={isLoading ? 0.3 : 1}
              bg={onDragHover ? "light" : "transparent"}
              zIndex="5"
              position="relative"
              transition="all 0.3s ease"
            >
              <VStack
                height="full"
                justify="center"
                align="center"
                transition="all 0.3s ease"
                opacity={onDragHover ? 0 : 1}
              >
                <HStack fontWeight="500" color="terciary">
                  <span>Adicionar imagem</span>
                  <FiUpload />
                </HStack>
                <Box fontWeight="300" fontSize="sm" color="secondary">
                  ou arraste a imagem para carregar
                </Box>
              </VStack>
            </Box>

            <Box
              position="absolute"
              top="50%"
              left="50%"
              fontWeight="500"
              fontSize="2xl"
              color="text"
              zIndex="10"
              transform="translateX(-50%) translateY(-50%)"
              opacity={onDragHover ? 1 : 0}
              transition="all 0.5s ease"
            >
              Drop it like it{"`"}s hot
            </Box>
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
export default memo(InputFile);
