class PagesController  < ApplicationController

def create
  @page = Page.create()
  @css = Csscode.create(page_id: @page.id, code:params['csscode']['code'])
  @html = Htmlcode.create(page_id: @page.id, code:params['htmlcode']['code'])
  @javascript = Javascriptcode.create(page_id: @page.id, code:params['javascriptcode']['code'])

  redirect_to (@page)
end

def show
  @page = Page.find(params[:id])
  @css = @page.csscode
  @html = @page.htmlcode
  @javascript = @page.javascriptcode

  render action: "../welcome/index"
end

def update
  @page = Page.find(params[:id])
  @css = @page.csscode
  @html = @page.htmlcode
  @javascript = @page.javascriptcode
  @css.code = params['csscode']['code']
  @css.save
  @html.code = params['htmlcode']['code']
  @html.save
  @javascript.code = params['javascriptcode']['code']
  @javascript.save
  render action: "../welcome/index"
end

# private

def page_params
  params.require(:page).permit(
    :name,
    )
end

end


