import SearchInput from '@/components/common/Form/SearchInput';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Notification from './Notification';
import ProfilePopover from './ProfilePopover';
import TitleWithBreadcrumb from './TitleWithBreadcrumb';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-background pl-4 md:pl-[0px] pr-[30px] py-4 shrink-0 gap-2 fixed top-0 right-0 left-0 md:left-[320px]">
      <div className="flex items-center gap-5">
        <SidebarTrigger className="-ml-1 block md:hidden" />

        <TitleWithBreadcrumb />
      </div>

      <div className="flex items-center gap-5">
        <SearchInput placeholder="Search" />

        <Notification />

        <ProfilePopover />
      </div>
    </header>
  );
};

export default Header;
