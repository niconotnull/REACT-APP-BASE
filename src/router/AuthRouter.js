import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-cotainer'>
        <Switch>
          <Route path='/auth/login' component={LoginScreen} />
          <Route path='/auth/register' component={RegisterScreen} />

          <Redirect to='/' component={JournalScreen} />
        </Switch>
      </div>
    </div>
  );
};
