import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
import registerIcon from './regiter-icon'

export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProperties)

  app.use(registerIcon)
}
