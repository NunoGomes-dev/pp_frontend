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
        style={{ borderStyle: onDragHover ? "dashed" : "solid" }}
        className={`border-2 p-0 h-full overflow-hidden w-full relative transition-all duration-300 ease ${containerProps}`}
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
              className="h-full text-lg cursor-pointer relative transition-all duration-300"
              htmlFor="file"
              style={{
                zIndex: 5,
                opacity: isLoading ? 0.3 : 1,
                bg: onDragHover ? "#FAFAFA" : "transparent",
              }}
            >
              <VStack
                className="h-full justify-center items-center transition-all ease duration-300"
                height="full"
                justify="center"
                align="center"
                transition="all 0.3s ease"
                style={{
                  opacity: onDragHover ? 0 : 1,
                }}
              >
                <HStack className="font-medium text-terciary gap-2 items-center">
                  <span>Adicionar imagem</span>
                  <FiUpload />
                </HStack>
                <Box className="font-light text-sm text-secondary">
                  ou arraste a imagem para carregar
                </Box>
              </VStack>
            </Box>

            <Box
              className={
                "absolute top-1/2 left-1/2 font-medium text-2xl text-text z-10 transition-all duration-500 ease"
              }
              style={{
                transform: "translateX(-50%) translateY(-50%)",
                opacity: onDragHover ? 1 : 0,
              }}
            >
              Drop it like it{"`"}s hot
            </Box>
          </label>
        )}
        {!value && isLoading && (
          <Spinner
            size="48px"
            className="absolute top-1/2 left-1/2 z-10"
            style={{ transform: "translateY(-24px) translateX(-24px)" }}
          />
        )}
        {value && !isLoading && (
          <Box className={`${containerProps}`}>
            <Image src={value} alt="image_part" className="w-full h-full" />
            <Box
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => callback(null)}
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
