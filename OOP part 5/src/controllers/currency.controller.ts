import { UserService } from '../services/currency.service';
import { UserView } from '../views/currency.view';

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
export class CurrencyController {
  constructor(private userService: UserService, private userView: UserView) {
    
  }

}
