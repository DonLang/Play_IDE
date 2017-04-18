class PagesController  < ApplicationController

def create
  print params
  page = Page.create()
  css = Csscode.create(page_id: page.id, code:params['csscode']['code'])
  html = Htmlcode.create(page_id: page.id, code:params['htmlcode']['code'])
  javascript = Javascriptcode.create(page_id: page.id, code:params['javascriptcode']['code'])


end

def show
  @page = Page.find(params[:id])

end

private

def page_params
  params.require(:page).permit(
    :name,
    )
end



end


