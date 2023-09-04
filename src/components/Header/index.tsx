import { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { Button, ButtonsWrapper, HeaderTitle, HeaderWrapper, Page } from './styles'
import store from 'store/todoStore'

const Header: FC = observer(() => {
  const { total, page } = store
  return (
    <HeaderWrapper>
      <HeaderTitle>
        {total}
      </HeaderTitle>

      <ButtonsWrapper>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6.00065 11.9486C5.73465 11.9486 5.51017 11.8571 5.32719 11.6741C5.14422 11.4911 5.05273 11.2667 5.05273 11.0007V6.94857H1.00065C0.734651 6.94857 0.510165 6.85708 0.327193 6.67411C0.14422 6.49114 0.0527344 6.26665 0.0527344 6.00065C0.0527344 5.73465 0.14422 5.51017 0.327193 5.32719C0.510165 5.14422 0.734651 5.05273 1.00065 5.05273H5.05273V1.00065C5.05273 0.734651 5.14422 0.510165 5.32719 0.327193C5.51017 0.144221 5.73465 0.0527344 6.00065 0.0527344C6.26665 0.0527344 6.49114 0.144221 6.67411 0.327193C6.85708 0.510165 6.94857 0.734651 6.94857 1.00065V5.05273H11.0007C11.2667 5.05273 11.4911 5.14422 11.6741 5.32719C11.8571 5.51017 11.9486 5.73465 11.9486 6.00065C11.9486 6.26665 11.8571 6.49114 11.6741 6.67411C11.4911 6.85708 11.2667 6.94857 11.0007 6.94857H6.94857V11.0007C6.94857 11.2667 6.85708 11.4911 6.67411 11.6741C6.49114 11.8571 6.26665 11.9486 6.00065 11.9486Z" fill="#3D8FEC"/>
          </svg>
        </Button>

        <Page>
          {page - 1 }
        </Page>
      </ButtonsWrapper>
    </HeaderWrapper>
  )
})

export default Header