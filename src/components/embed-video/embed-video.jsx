import { AspectRatio, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function EmbedVideo({ ratio, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        className={`w-[100%] h-auto ratio-${ratio}`}
        style={{
          backgroundImage: "url('/video.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={onOpen}
      ></div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onClose}
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent height={"50vh"}>
          <ModalCloseButton />
          <ModalBody className="flex items-center justify-center">
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
// return (

//   // <div className="w-[100%] p-2 md:p-52 ">
//   //   {/* <AspectRatio className="mx-auto" ratio={ratio}>
//   //     {children}
//   //   </AspectRatio> */}
//   // </div>
// );
// }

export default EmbedVideo;
