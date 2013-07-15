class StaticPagesController < ApplicationController

  def welcome

  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def static_page_params
      params[:static_page]
    end
end
