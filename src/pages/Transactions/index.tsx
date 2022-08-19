import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
return(
    <div>
       <Header />
       <Summary />

       <TransactionsContainer>
          <SearchForm />
        <TransactionsTable>
            <body>
                <tr>
                    <td width="50%">Desenvolvimento de site</td>
                    <td>
                        <PriceHighlight variant="income">
                             R$ 12.000,00
                        </PriceHighlight>    
                    </td>
                    <td>Venda</td>
                    <td>13/04/2022</td>
                </tr>
                <tr>
                    <td>Hamburguer</td>
                    <td>
                        <PriceHighlight variant="outcome">
                         - R$ 59,00
                        </PriceHighlight>  
                    </td>
                    <td>Alimentação</td>
                    <td>10/04/2022</td>
                </tr>
            </body>
        </TransactionsTable>
       </TransactionsContainer>

    
    </div>
)
}
