import { StyledMessageBox } from "./style";
import ShopingBag from "../../assets/ShoppingBag.svg";
import { Headline } from "../../styles/components/typography";

export const MessageBox = () => {
  return (
    <StyledMessageBox>
      <div>
        <img src={ShopingBag} alt="Sacola" />
      </div>
      <Headline color="grey-300">
        A vida é como um sanduíche, é preciso recheá-la com os{" "}
        <strong>melhores</strong> ingredientes.
      </Headline>
    </StyledMessageBox>
  );
};
