class AssetsController < ApplicationController
  def show
    asset_path = "#{Rails.root}/app/assets/#{params[:asset]}.#{params[:format]}"
    send_file asset_path, disposition: 'inline'
  end
end