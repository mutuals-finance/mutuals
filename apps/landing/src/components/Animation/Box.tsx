import { chakra, shouldForwardProp } from "@splitfi/ui";
import { isValidMotionProp, motion } from "framer-motion";

export default chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
