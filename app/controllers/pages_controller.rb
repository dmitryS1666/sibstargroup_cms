class PagesController < ApplicationController
  def home
    @navigation = Navigation.items
    @navigation_page = NavigationPage.items
    @titles = Title.items
    @buttons = Button.items
    @contacts = Contact.items
    @footer = Footer.items
    @general = General.items

    @cookies = Cookies.find_by(language: I18n.locale)
  end
end
