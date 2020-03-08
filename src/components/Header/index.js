import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// import { Nav, buttonUI } from './styles';
import { showAlertTotal } from '../../store/modules/person/actions';
import * as PersonAction from '../../store/modules/person/actions';

function Header() {
  return (
    <AppBar color="primary">
      <Typography variant="h6" color="inherit">
        Photos
      </Typography>
      <Button type="submit" id="btn_EfetuarCadastro">
        Cadastro
      </Button>
      <Button type="submit" id="btn_Efetuarlogin">
        login
      </Button>
      <Button type="submit" id="btn_EfetuarLogoff">
        Sair
      </Button>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </AppBar>
  );
}

const mapStateToProps = state => ({
  personCount: state.person.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PersonAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
