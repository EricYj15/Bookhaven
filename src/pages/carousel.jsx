import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/arranjo-de-livros-de-vista-acima_23-2148882757.jpg?w=740&t=st=1699279676~exp=1699280276~hmac=a96ad97c3bfc2a3e148b11af837bfe6fdb7a2aaa816c6b5e2a898c82580963b4" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BookHaven</h3>
          <p>Qualidade e Segurança na entrega!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://conteudo.imguol.com.br/c/entretenimento/ab/2019/08/08/livraria-da-travessa-abre-a-primeira-loja-de-rua-da-rede-em-sao-paulo-1565288790507_v2_900x506.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>A trigueira</h3>
          <p>a melhor padaria da região</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/fotos-gratis/pilhas-de-literatura-antiga-em-prateleiras-de-madeira-geradas-por-ia_188544-31758.jpg?w=740&t=st=1699279738~exp=1699280338~hmac=9d66c3c791bf23732bda902d5568c8481cfdded486c0a838cd545fb4d9de3895" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>A trigueira</h3>
          <p>
            Funcionamos 24 horas por dia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;