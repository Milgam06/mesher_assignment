import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalCloseContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  min-width: 32rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #2d2f34;
  z-index: 999;
`;
