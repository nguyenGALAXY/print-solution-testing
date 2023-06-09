import { Avatar, Flex, List, Popover, Typography } from '@cads-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '~/components/Icon';
import { PATH } from '~/constants/path';
import useAuth from '~/hooks/useAuth';
import { withStatic } from '~/utils/withStatic';

// -----------------------------
interface HeaderAccountProps {
  role?: string;
}

// -----------------------------
const HeaderAccount: React.FC<HeaderAccountProps> = (props) => {
  const { role } = props;
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorEl = React.useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { profile = {}, logout } = useAuth();

  const avt = withStatic('img/default-user.png');
  const name = `${profile.firstName} ${profile.lastName}`;

  return (
    <React.Fragment>
      <Flex spacing={1.5} sx={{ cursor: 'pointer' }} onClick={() => setOpenMenu(!openMenu)}>
        <Avatar ref={anchorEl} src={avt} alt={name} />
        <Flex
          sx={(theme) => ({ [theme.breakpoints.down('md')]: { __display: 'none' } })}
          spacing={1}
          direction="column"
        >
          <Typography fs={16} fw={500}>
            {name}
          </Typography>
          {role && (
            <Typography fs={15} color="text.secondary">
              {role}
            </Typography>
          )}
        </Flex>
      </Flex>

      {/* Account menu */}
      <Popover
        anchorEl={anchorEl}
        open={openMenu}
        offset={[0, 10]}
        placement="bottom-end"
        sx={{ minW: 180 }}
        showBackdrop
        onClose={() => setOpenMenu(false)}
      >
        <List
          sx={{ py: 2, minW: 220 }}
          items={[
            {
              primary: 'Quản lý tài khoản',
              icon: <Icon icon="ant-design:setting-filled" />,
              onItemClick: () => navigate(PATH.ADMIN.PROFILE)
            },
            {
              primary: 'Đăng xuất',
              icon: <Icon icon="ri:logout-box-r-fill" />,
              onItemClick: () => logout({ redirectUri: window.location.origin })
            }
          ]}
        />
      </Popover>
    </React.Fragment>
  );
};

export default HeaderAccount;
