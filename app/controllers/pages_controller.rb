class PagesController < ApplicationController
  include ActiveStorage::SetCurrent

  def home
    @navigation = Navigation.items
    @navigation_page = NavigationPage.items

    @titles = Title.items
    @general = General.items

    @slides = Slider.items
    @timer = SliderConfig.find_by(name: 'slider_timer')['value']

    @buttons = Button.items
    @contacts = Contact.items
    @footer = Footer.items

    @cookies = CookieElement.find_by(language: I18n.locale)
  end
end
