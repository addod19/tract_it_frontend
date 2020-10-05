import signup from '../../redux/actions/authActions';
import axios from 'axios';

jest.mock('axios');

it('returns a successful message after signup', async () => {
  await axios.get.mockResolvedValue({
    user: {
      name: 'Daniel',
      email: 'dan@gmail.com',
      password: 'dandandan'
    }
  })
});

