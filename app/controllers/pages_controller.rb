class PagesController < ApplicationController
  def create
    @page = Page.create
    @css = Csscode.create(page_id: @page.id, code: params['csscode']['code'])
    @html = Htmlcode.create(page_id: @page.id, code: params['htmlcode']['code'])
    js_code = params['javascriptcode']['code']
    @javascript = Javascriptcode.create(page_id: @page.id, code: js_code)

    redirect_to @page
  end

  def show
    if Page.exists?(params[:id])
      @page = Page.find(params[:id])
      @css = @page.csscode
      @html = @page.htmlcode
      @javascript = @page.javascriptcode
    else
      redirect_to '/'
      return
    end
    render action: '../welcome/index'
  end

  def update
    @page = Page.find(params[:id])
    @css = @page.csscode
    @html = @page.htmlcode
    @javascript = @page.javascriptcode
    @html.code = params['htmlcode']['code']
    @css.code = params['csscode']['code']
    @javascript.code = params['javascriptcode']['code']
    @javascript.save && @css.save && @html.save
    render action: '../welcome/index'
  end

  # private

  def page_params
    params.require(:page).permit(
      :name
    )
  end
end
