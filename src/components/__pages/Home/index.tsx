import Table from "../../__ui/Table";
import { MainWrapper } from "./style";

export default function HomePage(): JSX.Element {

  return (
    <MainWrapper>
     <Table gridArea={'1 / 1 / 3 / 4'} />
     <Table gridArea={'1 / 4 / 3 / 6'} />
     <Table gridArea={'3 / 1 / 6 / 6'} />
    </MainWrapper>
  );
}