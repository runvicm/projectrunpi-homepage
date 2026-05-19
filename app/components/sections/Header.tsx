import { MainNavLink } from "../blocks/navigations/MainNavLink"
import { MobileMainNavLink } from "../blocks/navigations/MobileMainNavLink"
import { SearchBarInput } from "../blocks/navigations/SearchBarInput"
import { AppIcon } from "../ui/AppIcon"
import { AppName } from "../ui/AppName"


export const Header = () => {
  return (
    <nav className="bg-white/20 border-b backdrop-blur-md border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div id="bnand" className="flex gap-2">
            <AppIcon />
            <AppName />
          </div>
          <MainNavLink />
          <div className="hidden lg:block">
            <SearchBarInput />
          </div>
          <MobileMainNavLink />
        </div>
      </div>
    </nav>
  )
}