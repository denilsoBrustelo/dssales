import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Cateoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>341</td>
            <td>07/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Campinas</td>
            <td>Credito</td>
            <td>R$ 540.000,00</td>
          </tr>

          <tr>
            <td>342</td>
            <td>08/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Campinas</td>
            <td>Credito</td>
            <td>R$ 600.000,00</td>
          </tr>

          <tr>
            <td>342</td>
            <td>08/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Campinas</td>
            <td>Credito</td>
            <td>R$ 600.000,00</td>
          </tr>

          <tr>
            <td>342</td>
            <td>08/11/2022</td>
            <td>Feminino</td>
            <td>Roupas e acessorios</td>
            <td>Campinas</td>
            <td>Credito</td>
            <td>R$ 600.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
