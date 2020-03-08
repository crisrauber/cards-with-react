import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddIcon from '@material-ui/icons/Add';
import { Title, SendButton, MyInput, PaperItem, CardMain } from './styles';
import api from '../../services/apiCards';

import PersonItem from '../../components/PersonItem';
import * as userAction from '../../store/modules/user/actions';
import * as cardAction from '../../store/modules/cards/actions';

class Main extends Component {
  state = {
    content: '',
    title: '',
    persons: [],
    newPerson: '',
    cards: [],
  };

  async componentDidMount() {
    const { user } = this.props;
    const { cards } = this.props;
    if (user.length > 0) {
      const response = await api.get(`/cards/${user[0].id}`, {
        headers: { Authorization: `Bearer ${user[0].token}` },
      });
      this.setState({ cards: response.data });
      // console.log(this.state.cards);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // AQUI EXECUTA QUANDO ALTERA O STATE LOCAL
  }

  handleInputChange = event => {
    const { target } = event;
    if (target.name === 'title') {
      this.setState({ title: target.value });
    } else {
      this.setState({ content: target.value });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { user } = this.props;
    if (user.length > 0) {
      const response = await api.post(
        '/cards',
        {
          idUser: user[0].id,
          title: this.state.title,
          content: this.state.content,
        },
        {
          headers: { Authorization: `Bearer ${user[0].token}` },
        }
      );
      this.setState({ cards: [...this.state.cards, response.data] });
    }
  };

  removeToStore = person => {
    const { removeFromPerson } = this.props;

    removeFromPerson(person);
  };

  handleDelete = async item => {
    // this.setState({
    //   persons: this.state.persons.filter(item => item !== person),
    // });
    // this.removeToStore(person);

    const { user } = this.props;
    if (user.length > 0) {
      this.setState({
        cards: this.state.cards.filter(item => item.id !== item.id),
      });
      const response = await api.delete(`/cardsId/${item.id}`, {
        headers: { Authorization: `Bearer ${user[0].token}` },
      });
      // this.setState({ cards: [response.data] });
      console.log(response.data);
    }
  };

  render() {
    return (
      <>
        <CardMain>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Titulo:</label>
              <br />
              <MyInput
                label="Digite um titulo:"
                onChange={this.handleInputChange}
                name="title"
                type="text"
              />
            </div>
            <br />
            <div>
              <label>Conteúdo:</label>
              <br />
              <MyInput
                label="Digite seu conteudo:"
                onChange={this.handleInputChange}
                name="content"
                type="text"
              />
            </div>
            <br />
            <SendButton type="submit">Enviar</SendButton>
          </form>
          <br />
          <ul>
            {this.state.cards.map(item => (
              <PaperItem>
                <PersonItem
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  onDelete={() => this.handleDelete(item)}
                />
              </PaperItem>
            ))}
          </ul>
        </CardMain>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cards: state.cards,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userAction, cardAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
